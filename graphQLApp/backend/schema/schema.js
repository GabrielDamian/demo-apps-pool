const BookSchema = require('../models/book');
const AuthorSchema = require('../models/author');
const {
    buildSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const _ = require('lodash')

//temp data

var books =[
    {name: 'Name_1',genre: 'dummy_genre_1',id:'1', authorId:'1'},
    {name: 'Name_2',genre: 'dummy_genre_2',id:'2', authorId:'2'},
    {name: 'Name_3',genre: 'dummy_genre_3',id:'3', authorId:'3'},
];
var authors = [
    {name: 'author_1', age: 20, id:'1'},
    {name: 'author_2', age: 21, id:'2'},
    {name: 'author_3', age: 22, id:'3'}
]

//for types that dependens on other types, you need to have fields as an arrow function
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args){
                //return _.find(authors,{id: parent.authorId});
                return AuthorSchema.findById(parent.authorId);
            }
            
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: ()=>({
        id: {type: GraphQLString},
        name: {type:GraphQLString},
        age: {type: GraphQLInt},
        books:{
            type: new GraphQLList(BookType),
            resolve(parent, args){
                //return _.filter(books, {authorId: parent.id})
                return BookSchema.find({authorId: parent.id})
            }
        }
    })
})

//fields don't necesary need to be inside an arrow function 
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book :{
            type: BookType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(parent, args){
                //args.id - for fetching the database
                //code to get data from database
                //return _.find(books, {id: args.id})
                return BookSchema.findById(args.id)
            }
        },
        author:{
            type: AuthorType,
            args: {
                id: {type:GraphQLID}
            },
            resolve(parent, args){
                //return _.find(authors,{id: args.id})
                return AuthorSchema.findById(args.id);
            }
        },
        books:{
            type: new GraphQLList(BookType),
            resolve(parent, args){
                //return books
                return BookSchema.find({})
            }
        },
        authors:{
            type: new GraphQLList(AuthorType),
            resolve(parent, args)
            {
                //return authors
                return AuthorSchema.find({});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        addAuthor:{
            type: AuthorType,
            args:{
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)  }
            },
            resolve(parent, args){
                let author = new AuthorSchema({
                    name: args.name,
                    age: args.age
                })

                return author.save()
                
            }
        },
        addBook:{
            type: BookType,
            args:{
                name: {type: new GraphQLNonNull(GraphQLString)},
                genre: {type: new GraphQLNonNull(GraphQLString)},
                authorId: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                let book = new BookSchema({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                })
                return book.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
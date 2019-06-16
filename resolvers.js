

require('dotenv').config();

const resolvers = {

    Query: {       
        // Fetch all posts

        async allPosts() {

            return await Post.all();
        },

        // Get a post by it ID

        async fetchPost(_, { id }) {

            return await Post.findById(id);

        },
    },
    Mutation: {

        async addPost(_, { id, App_name, Time }, { authUser }) {
    
        
            const post = await Post.create({
    
                id,
    
                App_name,
    
                Time,
    
            });
            return post;
        },
    },
 
}

module.exports = resolvers;




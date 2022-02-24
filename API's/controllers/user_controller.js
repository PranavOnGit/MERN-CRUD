import User from '../Models/user_schema.js'

//GET
export const getUsers = async (request, response) => {
        try {
            let user = await User.find();
            response.json(user);
            console.log('All users fetched successfully!');
            response.send('All users fetched successfully!');
            response.status(200).json('All users fetched successfully!');
        } catch (error) {
            response.json({ message : error.message });
            console.log('All users fetching failed!');
            response.send('All users fetching failed!');
        }  
}

//ADD 
export const addUser = async (request, response) => {
    const user = request.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        response.json(newUser);
        response.send('Added new user successfully!');
        response.status(200).json('Added new user successfully!');
    } catch (error) {
        response.json({ message : error.message });
        response.send('Added new user failed!');
    }    
}


//EDIT 
export const getUserById = async (request, response) => {
    const id = request.params.id;
    try {
        const user = await User.findById(id);
        response.json(user);
        response.send('User data pulled successfully!');
    } catch (error) {
        response.json({ message:error.message });
        // console.log('failed');
    }
};
export const editUser = async (request, response) => {
    const user = request.body;
    const editUser = new User(user);
    try {
        await User.updateOne({ _id : request.params.id}, editUser);
        response.json(editUser);
        response.send('Updated user successfully!');
    } catch (error) {
        response.json({ message :  error.message })
    }
};

//DELETE 
export const deleteUser = async (request, response) => {
    try {
        // const deleteUser =  new User(user);
        await User.deleteOne({ _id : request.params.id});
        response.json(' User deleted successfully! ');
    } catch (error) {
        response.json({ message :  error.message })
    }
}
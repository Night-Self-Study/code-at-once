export default {
    Query: {
        async allUser() {
            return await User.find();
        }
    }
}
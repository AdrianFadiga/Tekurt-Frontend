export type Friend = {
    userId: string
    friendId: string
    status: string
    friend: {
        firstName: string,
        lastName: string,
        username: string,
        imageUrl: string
    }
}
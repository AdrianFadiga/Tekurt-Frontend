export type Friend = {
    userId: string
    friendId: string
    status: 'accepted' | 'pending'
    friend?: {
        firstName: string,
        lastName: string,
        username: string,
        imageUrl: string,
    }
}
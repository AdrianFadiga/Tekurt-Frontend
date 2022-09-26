export interface ITestimonial {
    id: string
    userId: string
    senderId: string
    status: 'pending' | 'accepted'
    content: string
    createdAt: string
    updatedAt: string
    sender: {
        firstname: string
        lastname: string,
        username: string,
        imageUrl: string,
    }
}
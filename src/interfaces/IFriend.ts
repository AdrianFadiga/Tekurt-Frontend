type Friend = {
    userId: string
    friendId: string
    status: string
}

export interface IFriend {
    friends: Friend[],
    invites: Friend[],
}
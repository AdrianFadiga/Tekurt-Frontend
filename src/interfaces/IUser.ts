import { Friend } from '../types/Friend';

export interface IUser {
    id: string,
	firstName: string,
	lastName: string,
	username: string,
	email: string,
	imageUrl: string,
	socialStatusId: string,
	children: string,
	smokes: string,
	drinkingId: string,
	signId: string,
	biography: string,
	active: boolean,
	createdAt: string,
	updatedAt: string,
	friends: Friend[]
}
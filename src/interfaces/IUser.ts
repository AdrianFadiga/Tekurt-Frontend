import { Friend } from '../types/Friend';

export interface IUser {
  id: string,
	firstName: string,
	lastName: string,
	username: string,
	email: string,
	imageUrl: string,
	socialStatusId: number,
	children: boolean,
	smokes: boolean,
	drinkingId: number,
	signId: number,
	biography: string,
	active: boolean,
	createdAt: string,
	updatedAt: string,
	friends: Friend[],
	socialStatus: {
		option: string
	},
	sign: {
		option: string
	},
	drinking: {
		option: string
	},
}
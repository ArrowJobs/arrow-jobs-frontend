import { Timestamp } from '@firebase/firestore-types';

export interface IUser {
	uid: string;
	name: string | null;
	type: string; // trainer, member, supervisor, admin
	avatar: string | null; //url to avatar image
	email: string | null;
	age?: number | null;
	sex?: string | null;
	weight?: number | null;
	height?: number | null;
	bmi?: number | null;
	country?: string;
	paid_user?: boolean;
	group_id?: string;
	current_membership?: {
		membership_id: string;
		type: string;
		begin_date: Date;
		end_date: Date;
	};
	membership_history?: [
		//sub-collection
		{ membership_id: string; type: string; begin_date: Date; end_date: Date }
	];
}

//remaining injury history
export interface IProfile {
	user: {
		uid: string;
		type: string;
		name: string;
		avatar: string;
	};
	age: number;
	sex: string;
	weight: number;
	height: number;
	bmi: number;
	email: string;
	current_workout: {
		schedule: string;
		description: string;
		preferredTimeFrom: Timestamp;
		preferredTimeTo: Timestamp;
		allotedTime: string;
		begin_date: Date;
		end_date: Date;
	};
	current_disorders: [
		{
			name: string;
			type: string;
			description: string;
			duration: string; //10_days
		}
	];
	level: string; //rookie, pro, expert, legend
	rating: number;
	member_group: {
		//if user == member
		gid: string;
		type: string;
		name: string;
	};
	member_groups: [
		//if user == trainer / supervisor
		{
			gid: string;
			type: string;
			name: string;
		}
	];
	profile_history: {
		workout_history: [
			//sub-collection
			{
				schedule: string;
				description: string;
				begin_date: Date;
				end_date: Date;
			}
		];
		disorders_history: [
			//sub-collection
			{
				name: string;
				type: string;
				duration: string;
				description: string;
			}
		];
	};
}

export interface IGroup {
	gid: string;
	name: string;
	type: string;
	current_members: [
		{
			uid: string;
			name: string;
			avatar: string;
			start_date: Date;
			end_date: Date;
		}
	];
	current_trainer: [
		{
			uid: string;
			name: string;
			avatar: string;
			start_date: Date;
			end_date: Date;
		}
	];
	current_schedule: {
		type: string;
		description: string;
		begin_date: string;
		end_date: string;
	};
	supervisor: {
		uid: string;
		name: string;
		avatar: string;
		begin_date: Date;
		end_Date: string;
	};
	avg_rating: number; //avg of session rating
	session: {
		session_id: string;
		session_name: string;
		start_time: string;
		end_time: string;
		rating: [number];
		avg_rating: number;
		video_uri: string;
	};
	group_history: {
		// sub collection
		trainer_history: [
			{
				uid: string;
				name: string;
				avatar: string;
				start_date: Date;
				end_date: Date;
			}
		];
		members_history: [
			//sub collection
			{
				uid: string;
				name: string;
				avatar: string;
				start_date: Date;
				end_date: Date;
			}
		];
		schedule_history: [
			{
				type: string;
				description: string;
				begin_date: string;
				end_date: string;
			}
		];
		supervisor_history: [
			{
				uid: string;
				name: string;
				avatar: string;
				begin_date: Date;
				end_Date: string;
			}
		];
		session_history: [
			{
				session_id: string;
				session_name: string;
				start_time: string;
				end_time: string;
				avg_rating: number;
				video_uri: string;
			}
		];
	};
}

//Response
/* 
{Sign-In User} {
accessToken: "ya29.a0AfH6SMCIiGOGqcLeCk6ZYwMxCgWhvuTTVjWnpNwhMRxqmPdlvve6XRJfaBgVMxoCi5d3fTHaVWavFpJ2IEQXghddj7RjWFog_hkBX5RXC7TSkE2CmPjtV1tcXa4b2vjS14mGu0DYKWf4Vgem5gx_OXQEiiOKVw8TN0Au"
idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJjNDk1MzBlMWZmOTA4M2RkNWVlYWEwNmJlMmNlNDM3ZjQ5YzkwNWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODQ4NjcyMzcyMjQtZnZtNGFrbHRmdWduMDc5M2V1ODFxbmRsZDlmNW0wbnIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NDg2NzIzNzIyNC1mdm00YWtsdGZ1Z24wNzkzZXU4MXFuZGxkOWY1bTBuci5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNTE4NjAxNjYxMzc5OTQxOTQ4MCIsImVtYWlsIjoicmlzaGFiaG1hbGlrOTU3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiMG1aVDI3VXV4emhobnA0cl9PZ2VJUSIsImlhdCI6MTU5OTUyOTk0OCwiZXhwIjoxNTk5NTMzNTQ4fQ.wL222g0s0ZVn1ZDs43vmdXJn_E40nhwWjLcHGuHwwLHYfKAeMTWWYZIBEuyS7lMW5vvSdS-1_EMK0Gb30oioW_up4RDrQlErQjvdfkxYXfmS7ZcoW4JUl9tPc0IsWL2aL55uuiCCoUQS-65pvPbMBplWov-4h0KNhO0dPgTOZGO3BsFlcetRbWPzdV4y9NjCzHRYaJDOeOVyDkC4MWwJflqpf471Jn4zQkazQFLsDbyazhlDvUrvrrPpJQho0Q4csfXLkb1lZlE_EeB6eITCJgefl777s_BtyGDEuFu-454eMoyOdAF-Let7zEeJamvmyVLek-ErAt4Yr0ihHHispg"
providerId: "google.com"
signInMethod: "google.com"  }
*/
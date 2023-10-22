export const handledMessageIds = new Set<string>();

export type QueueItem = {
	user_id: string;
	user_name: string;
	type: string;
	message: string;
};

export const queue: QueueItem[] = [];

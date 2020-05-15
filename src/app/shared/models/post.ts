export class Post {
    userId: number;
    title: string;
    body: string;

    // tslint:disable-next-line:align
    constructor(userId, title, body) {
        this.userId = userId;
        this.title = title;
        this.body = body;
    }
}

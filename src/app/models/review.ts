export class Review {
    cocktailId: number;
    rating: number;
    user: string;
    message: string;

    constructor(values) {
        this.cocktailId = values.cocktailId;
        this.rating = values.rating;
        this.user = values.user;
        this.message = values.message;
    }
}

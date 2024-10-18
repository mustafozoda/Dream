package dev.mustafozoda.internet_shop.model;

import jakarta.persistence.Embeddable;

@Embeddable
public class Review {

    private String username;
    private String comment;
    private int rating;

    public Review(String user, String comment, int rating) {
        this.username = user;
        this.comment = comment;
        this.rating = rating;
    }

    public Review() {
    }

    public String getUser() {
        return username;
    }

    public void setUser(String user) {
        this.username = user;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
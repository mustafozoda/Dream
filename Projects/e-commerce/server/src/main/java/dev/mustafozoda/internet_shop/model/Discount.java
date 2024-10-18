package dev.mustafozoda.internet_shop.model;

import jakarta.persistence.Embeddable;
import java.time.LocalDate;

@Embeddable
public class Discount {

    private int percentage;
    private LocalDate validUntil;   

    public Discount(int percentage, LocalDate validUntil) {
        this.percentage = percentage;
        this.validUntil = validUntil;
    }
    public Discount() {}

    public int getPercentage() {
        return percentage;
    }

    public void setPercentage(int percentage) {
        this.percentage = percentage;
    }

    public LocalDate getValidUntil() {
        return validUntil;
    }

    public void setValidUntil(LocalDate validUntil) {
        this.validUntil = validUntil;
    }

    @Override
    public String toString() {
        return "Discount{" +
                "percentage=" + percentage +
                ", validUntil=" + validUntil +
                '}';
    }
}

package dev.mustafozoda.internet_shop.model;
import jakarta.persistence.Embeddable;


@Embeddable
public class Stock {

    private int available;
    private int reserved;
    private String warehouseLocation;

    public Stock(int reserved, String warehouseLocation, int available) {
        this.reserved = reserved;
        this.warehouseLocation = warehouseLocation;
        this.available = available;
    }
    public Stock() {}

    public int getAvailable() {
        return available;
    }

    public void setAvailable(int available) {
        this.available = available;
    }

    public int getReserved() {
        return reserved;
    }

    public void setReserved(int reserved) {
        this.reserved = reserved;
    }

    public String getWarehouseLocation() {
        return warehouseLocation;
    }

    public void setWarehouseLocation(String warehouseLocation) {
        this.warehouseLocation = warehouseLocation;
    }

    @Override
    public String toString() {
        return "Stock{" +
                "available=" + available +
                ", reserved=" + reserved +
                ", warehouseLocation='" + warehouseLocation + '\'' +
                '}';
    }
}

export default function PriceRange({priceRange}) {

    if(!priceRange)
        return null;

    return (
        <div className = "price-range">
            <p>Suggested Price Range: {priceRange}</p>
        </div>
    )
}
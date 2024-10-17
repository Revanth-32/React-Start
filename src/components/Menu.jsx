function Menu() {
    return (
        <>
            <div style={{ marginLeft: '500px', marginRight: '100px', display: "inline-block" }}>
                <h2>Veg Menu</h2>
                <ul>
                    <li>Paneer</li>
                    <li>Veg Biryani</li>
                    <li>Butter Nan</li>
                    <li>Veg Fried Rice</li>
                    <li>Bagara Rice</li>
                </ul>
            </div>

            <div style={{ marginLeft: '100px', marginRight: '100px', display: "inline-block" }}>
                <h2>Non-Veg Menu</h2>
                <ul>
                    <li>Chicken Curry</li>
                    <li>Chicken Biryani</li>
                    <li>Butter Chicken</li>
                    <li>Chicken Fried Rice</li>
                    <li>Fish Curry</li>
                </ul>
            </div>
        </>
    );
}

export default Menu;

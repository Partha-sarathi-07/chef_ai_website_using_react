function Main() {
    
    const ingredients = ["chicken", "Oregano", "Tomatoes"]
    const remem = ingredients.map((item) => {
        return <li key={item}>{item}</li>
    })
    return (
        <main>
            <form className="recipe_ingredient">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button>+ Add ingredient</button>
            </form>
            <ul>
                {/* to add ingredients */}
                {remem}
            </ul>
        </main>
    );
}
export default Main;

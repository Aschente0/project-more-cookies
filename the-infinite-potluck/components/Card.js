const Card = () => {
    <div className="recipe">
        <img className="recipeImage" height="200" />
        <div className="recipeInfo">
        </div>

        <div className="test">
            HELLO WORLD
            <style jsx>{`
                .recipe {
                    display:flex;
                    flex-direction:row;  
                }
            `}
        </div>
    </div>
}

{/* 
`
                                <div className="recipe">
                                    <img src="${baseUri + imageUrl}" className="recipeImage" height="200"/>
                                    <div className="recipeInfo">
                                        <div>${result.title}</div>
                                        <div>${result.readyInMinutes}</div>
                                        <div>${result.servings}</div>
                                    </div>

                                    <div className="test">
                                        HELLO WORLD
                                        <style jsx> {\`
                                            .test {
                                                color: blue;
                                            }
                                        \`}
                                    </div>
                                    <style jsx> {\`
                                        .test {
                                            color: blue;
                                        }
                                    \`}
                                </div>
                                <style jsx>{\`
                                    .recipe {
                                        display:flex;
                                        flex-direction:row;  
                                    }
                                \`}
                            `; */}
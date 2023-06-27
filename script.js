// const heading =  React.createElement("h1",{},"Namaste Everyone");
    // const root = ReactDOM.createRoot(document.getElementById("root"));

    // const heading = React.createElement("h1",{
    //     id : "head1"
    // },"Heading 1");

    // const heading2 = React.createElement("h2",{
    //     id : "head2"
    // },"Heading 2");

    // const container  = React.createElement("div",{
    //     id : "container"
    // },[heading,heading2]);
  

    const HeadingComponent = ()=>{
        return (
            <h1>Heading</h1>
        );
    };

    const headingElem = (
        <>
        <h1>Namaste Guys this is the element</h1>
        <h2>This is the heading elem</h2>
        </>
    );

    const title = (
        <div>
            <HeadingComponent />
            {headingElem}
            <h1>Namste React</h1>
        </div>
    );

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(title);
    


    // root.render(heading);
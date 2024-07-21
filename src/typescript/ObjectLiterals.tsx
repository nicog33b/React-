interface Person {
    fullName: string;
    age: number;
    address: {
        country: string;
        direction: string;
    };
}

export const ObjectLiterals = () => {
    const person: Person = {
        fullName: 'Nicolas Garcia',
        age: 24,
        address: {
            country: 'Uruguay',
            direction: 'Independencia 919'
        }
    };


    return (
        <>
            <div className="">
            <h3>Objetos Literales</h3>
            <p>Nombre: {person.fullName}</p>
            <p>Edad: {person.age}</p>
            <p>País: {person.address.country}</p>
            <p>Dirección: {person.address.direction}</p>
            </div>
          
            <div>
                <h3>JSON con etiqueta pre </h3>
                <pre>
                    {JSON.stringify(person, null, 2)}
                    </pre>
            </div>
        </>
    )
}
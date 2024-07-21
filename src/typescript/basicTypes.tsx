

export const BasicTypes = () => {

    const name = ['Nicolas ', 'Javier'];
    const age: number = 24;
    const isActive: boolean = true;
    const powers: string[] = ['React ', 'ReactNative ', 'Angular '];
    powers.push('C#')
    return (
        <>
        <div>BasicTypes</div>
            {name} {age} {isActive ? 'Verdadero' : 'Falso'}
            <br />
            {powers}


            
           </>
    )
}
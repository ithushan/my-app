export default function({params}){
    return(
        <div>
            <h3>Test Full dynamic URL !</h3>
            <p>
                URL IS : {params.slug[0]} / {params.slug[1]}
            </p>
        </div>
    )
}
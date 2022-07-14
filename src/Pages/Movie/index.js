import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import api from '../../services/api'
import './movie-info.css';

function Movie(){
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate();

    useEffect(() =>{
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: '5f220ecb5f68a620de525e0511841cb0',
                    language: 'pt-BR',
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("tem esse filme aqui nao");
                navigation("/", {replace: true});
                return;
            })
        }
        
        loadFilme();

        return() => {
            console.log("componente desmontado")
        }

    }, [navigation, id])

    function salvarFilme(){
        const myList = localStorage.getItem("@movieflix")

        let filmesSalvos = JSON.parse(myList) || [];

        const hasMovie = filmesSalvos.some( (filmesSalvos) => filmesSalvos.id === filme.id)

        if(hasMovie){
            toast.warn("This movie is already on your list")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@movieflix", JSON.stringify(filmesSalvos));
        toast.success("Movie saved!")
    }

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Loading details...</h1>
            </div>
        )
    }

    return(
        <div className='filme-info'>

            <h1> {filme.title} </h1>
            <img src={`http://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span> {filme.overview} </span>
            <strong>Avaliação: {filme.vote_average}/10</strong>

            <div className='area-buttons'>
                <button onClick={salvarFilme}>Save</button>
                <button>
                    <a target="blank" rel="external" href={`http://youtube.com://results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Movie;
import {useEffect, useState} from "react";
import {getAllArtisans, getReviews} from "../api/sql";
import dayjs from "dayjs";

const SQL = () => {
    const [artisans, setArtisans] = useState([])
    const [reviews, setReviews] = useState([])
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        getAllArtisans()
            .then((res) => setArtisans(res))
            .catch((err) => console.error(err))
    }, [])

    const getReviewsArtisan = (id) => {
        getReviews(id)
            .then((res) => setReviews(res))
            .catch((err) => console.error(err))
    }

    useEffect(() => {
        if (selected) getReviewsArtisan(selected)
    }, [selected])

    return ( <div className='flex justify-center'>
        <div className='flex flex-col items-center justify-center py-10 space-y-[40px] w-full'>
            <div className='flex items-center justify-between w-full'>
                <h2 className='font-bold text-[2.25rem] self-start'>En quête de la requête</h2>
            </div>
            <p>Si j'ai bien compris l‘exercice il suffit de donner la requête nécessaire pour récupérer les 3 derniers avis d'un des artisans. La voici donc:</p>
            <p className='border p-[16px] rounded-[20px] bg-gray-200'>
                SELECT * FROM user_review
                WHERE artisan_id = '$idArtisan'
                ORDER BY review_date DESC
                LIMIT 3
            </p>
            <p>Mais dans le doute je vous fais un example dynamique ci-dessous</p>


            <div className='w-full space-y-[40px] flex flex-col'>
                <span className='text-[1rem]'>Sélectionnez l'artisan dont vous voulez voir les 3 derniers avis</span>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:min-h-[400px] gap-[40px]'>
                    <div className='space-y-[12px]'>
                        {artisans.map((v) => (
                            <div key={v.id} onClick={() => setSelected(v.id)} className={'px-[20px] py-[10px] rounded-[20px] cursor-pointer ' + (selected === v.id ? 'border-[#32b48d] border-2' : 'border')}>
                                <span>{v.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className='border rounded-[20px] p-[12px] space-y-[16px]'>
                        {!reviews.length ? <span className='block w-full text-center'>Aucun artisan sélectionné</span> :
                        <>
                            {reviews.map((v, k) => (
                                <div className='rounded-[20px] border p-[30px]'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex space-x-[4px]'>
                                            {[...Array(5)].map((w, i) => (
                                                <svg width="30" height="30" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.6734 1.21405C8.54739 0.957138 8.28618 0.794312 8.00003 0.794312C7.71387 0.794312 7.45266 0.957137 7.32665 1.21405L5.50041 4.93759L1.89079 5.46898C1.61006 5.5103 1.37669 5.70652 1.28778 5.97599C1.19888 6.24546 1.26966 6.54202 1.47068 6.74229L4.17678 9.43834L3.26863 13.4384C3.20408 13.7227 3.31017 14.0187 3.54064 14.1973C3.77112 14.3759 4.08421 14.4047 4.34342 14.2712L8.00002 12.3879L11.6566 14.2712C11.9158 14.4047 12.2289 14.3759 12.4594 14.1973C12.6899 14.0187 12.796 13.7227 12.7314 13.4384L11.8233 9.43834L14.5294 6.74229C14.7304 6.54202 14.8012 6.24546 14.7123 5.97599C14.6234 5.70652 14.39 5.5103 14.1093 5.46898L10.4996 4.93759L8.6734 1.21405Z" fill={i < v.grade ? "#FFBE0B" : "#CCCCCC"}/>
                                                </svg>
                                            ))}
                                        </div>
                                        <span>le {dayjs(v.review_date).format('DD/MM/YYYY')}</span>
                                    </div>
                                    <span className='block font-bold'>{v.author}</span>
                                    <span className='block'>{v.comment}</span>
                                </div>
                            ))}
                        </>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SQL

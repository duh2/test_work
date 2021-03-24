import {User} from "./listOfUsers";


interface UserCardProps {
    user: User;

}

export const UserCard: React.FC<UserCardProps> = (props: UserCardProps) => {

    return (

        <div className='userPlate'>
            <img src={props.user.avatar_url} width='200px' height='200px' className="avatar"/>
            <div className='info'>
            <div className='name infoField'>{props.user.login}</div>
                <a href={props.user.html_url} className='profileLink infoField'>Profile Link</a>
                <a href={props.user.repos_url} className='repoLink infoField'>Repo Link</a>
            </div>
        </div>

    )


}
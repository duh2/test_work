import {User} from "./listOfUsers";


interface UserCardProps {
    user: User;
}

export const UserCard: React.FC<UserCardProps> = (props: UserCardProps) => {

    return (

             <div className='userPlate'>
                Name: {props.user.login}
            </div>

    )


}
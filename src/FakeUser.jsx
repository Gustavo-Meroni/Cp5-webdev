import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export default function FakeUser() {
    const [user, setUser] = useState(null);

   
    const fetchUser = async () => {
        try {
            const response = await fetch("https://randomuser.me/api/");
            const data = await response.json();
            setUser({
                name: `${data.results[0].name.first} ${data.results[0].name.last}`,
                username: data.results[0].login.username,
                email: data.results[0].email,
                urlPhoto: data.results[0].picture.large,
            });
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
        }
    };

  
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="flex items-center justify-between gap-1 bg-gray-200 my-1 p-2 rounded">
            <div className="flex items-center gap-2">
                {user ? (
                    <>
                        <div>
                            <img src={user.urlPhoto} alt="Foto do usuário" className="w-16 h-16 rounded-lg" />
                        </div>
                        <div className="leading-5">
                            <div className="font-semibold">{user.name}</div>
                            <div>@{user.username}</div>
                            <div className="text-gray-500">{user.email}</div>
                        </div>
                    </>
                ) : (
                    <p>Carregando usuário...</p>
                )}
            </div>
            <div 
                className="bg-gray-400 p-1 rounded-lg flex items-center cursor-pointer hover:bg-gray-500"
                onClick={fetchUser} 
            >
                <Icon icon="mdi-refresh" className="text-black text-3xl"/>
            </div>
        </div>
    );
}




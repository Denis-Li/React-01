import React from 'react';
import './Main.css';


class Main extends React.Component{
    render() {
        return (
            <div className="container">
                <main>
                    
                    <header> 
                        <h2> <span>Denis</span> </h2>
                        <p>Я начал работать со структурой наделал несколько папок, я так вижу структуру проекта   </p>
                        <p>Я подключил модуль для Scss и теперь можем просто писать в scss .  </p>
                        <p>Некоторые папки пустые и будут заполняться по мере работы с проектом  </p>
                        <p>Завтра я в плотную работаю с версткой . Публикацию (deploy) проекта еще не делал </p>
                    
                    </header>
                   
                  
                </main>
            </div>
        )
    }
}

export default Main;
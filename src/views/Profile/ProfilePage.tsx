import {MainLayout} from "../layout/MainLayout";

export const ProfilePage: React.FC<{  }> = props => {
    return (
        <MainLayout>
            <div className={'flex flex-grow-1 flex-shrink-0'}>

                <div>
                    <div>
                        <img />
                        <h5>Главная</h5>
                    </div>
                </div>

                <div>
                    <img />
                    <img />
                    <div>
                        <div></div>
                        <div></div>
                        <p></p>

                    </div>
                </div>


                <div></div>
            </div>
        </MainLayout>
    );
};
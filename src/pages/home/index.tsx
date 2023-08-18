import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { useApi } from '../../hooks/use-api';                                    
import { IHomeViewDto, IProdutoView } from './types';
import * as S from './styles'
        
export function Home(){
    
    const [produtosViewDto, setProdutosViewDto] = useState<IProdutoView[]>([]);
    const api = useApi();

    const responsiveOptions : CarouselResponsiveOption[] = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        const init = async () => {
            const dadosHome : IHomeViewDto = await api.get("home");
            console.log(dadosHome)
            setProdutosViewDto(dadosHome.produtosEmDestaque)
        }

        init();
    },[])

    const productTemplate = (produto: any) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <S.ContainerImg className="mb-3">
                    <S.image 
                        src={"data:image/png;base64," + produto.foto} 
                        alt={produto.descricao} 
                        className="w-6 shadow-2" 
                    />
                </S.ContainerImg>
                <div>
                    <h4 className="mb-1">{produto.descricao}</h4>
                    <h6 className="mt-0 mb-3">${produto.preco}</h6>
                    {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={produtosViewDto} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="360px" itemTemplate={productTemplate} />
        </div>
    )
}
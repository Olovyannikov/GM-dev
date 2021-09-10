import s from './PackageTable.module.scss';
import {PadIcon, SmartphoneIcon, WatchIcon} from '../../../../../../components/icons';
import {Button} from "../../../../../../components/button/Button";

interface PackageTableModel {
    trigger?: any
}

export const PackageTable = (props: PackageTableModel) => {

    const packages = [
        {
            less: 890,
            price: 1000,
            time: '5дн 12ч',
            type: 'watch',
            name: 'JoJo Teletype',
            user: 'Ксюха (Galaxy Watch Plus)',
            country: 'Франция',
            countryCode: 'fr'
        },
        {
            less: 100,
            price: 1200,
            time: '1дн 1ч',
            type: 'tel',
            name: 'Genterlugenlez',
            user: 'Вы (iPhone 6 Plus)',
            country: 'Германия',
            countryCode: 'de'
        },
        {
            less: 0,
            price: 1000,
            time: 'Трафик закончился',
            type: 'pad',
            name: 'Prepalo',
            user: 'Вы (iPhone 6 Plus)',
            country: 'Китай',
            countryCode: 'cn'
        }
    ]

    return (
        <table className={s.packages}>
            <tbody>
            {packages.map((item, id) => (
                <tr key={id} className={item.less === 0 ? s.error : ''}>
                    <td className={`${s.status} ${item.less === 0 ? 'error' : ''}`}>{item.time}</td>
                    <td className={s.device}>
                        {
                            item.type === 'watch' ? <WatchIcon/> : item.type === 'tel' ? <SmartphoneIcon/> : <PadIcon/>
                        }
                        <div><h4>{item.name}</h4><small>{item.user}</small></div>
                    </td>
                    <td className={s.progress}>
                        <div>
                            <span className={s.progressText}>
                                <span
                                    style={{color: item.less / item.price * 100 > 50 ? '#000' : '#e40101'}}>
                                    {item.less} МБ</span> / <span>{item.price / 1000} ГБ
                            </span>
                                {item.less > 0 ?
                                    <div className={s.progressBar}>
                                        <span style={{
                                            width: item.less / item.price * 100 + '%',
                                            background: item.less / item.price * 100 < 50 ? '#E40101' : '#B9F348'
                                    }} className={s.progressActive}/>
                                    </div>
                                    : ''}
                            </span>
                        </div>
                    </td>
                    <td className={s.country}>
                        <div>
                            <span>{item.country}</span>
                            <span className={`${s.countryFlag} flag-icon-${item.countryCode}`}/>
                        </div>
                        {item.less === 0 ?
                            <Button className={s.buyNewPackage} size={'small'}>Купить новый пакет</Button> : ''
                        }
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

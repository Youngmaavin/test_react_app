import React from 'react';
import './prices.css'

const Prices = () => {
    return (
        <div className='prices'>
        <h2 className='prices-header'>Цены</h2>
            <table className='prices-table'>
                <tr>
                    <th>
                    Дом № 1
                    </th>
                    <td>
                    5 000 ₽ будни / 7 000 ₽ выходные
                    </td>
                </tr>
                <tr>
                    <th>
                    Дом № 2
                    </th>
                    <td>
                    5 000 ₽ будни / 7 000 ₽ выходные
                    </td>
                </tr>
                <tr>
                    <th>
                    Дом № 3
                    </th>
                    <td>
                    4 000 ₽ будни / 6 000 ₽ выходные
                    </td>
                </tr>
                <tr>
                    <th>
                    Дом № 4
                    </th>
                    <td>
                    6 000 ₽ будни / 7 500 ₽ выходные
                    </td>
                </tr>
                <tr>
                    <th>
                        Банный комплекс
                    </th>
                    <td>
                    1 500 ₽ первый чаc / + 750 ₽ каждый следующий час
                    </td>
                </tr>
                <tr>
                    <th>
                        Беседка
                    </th>
                    <td>
                        3 500 ₽
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Prices;

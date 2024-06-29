import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { addDatas, deleteBtID, getAll } from '../../service/service';
import "./AdminPanel.scss";

function AdminPanel() {
    const [datas, setDatas] = useState([])

    async function getDatas() {
        const data = await getAll()
        setDatas(data)
    }
    async function addToData(val) {
        const data = await addDatas(val)
        getDatas()
    }
    async function deleteData(id) {
        const data = await deleteBtID(id)
        getDatas()
    }
    useEffect(() => {
        getDatas()
    }, [])
    
    return (
        <>
            <Formik
                initialValues={{ name: "", price: "", img: "", discount: false, discountPercent: "-0%" }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(5, 'Must be 5 characters or more')
                        .required('Required'),
                    price: Yup.string()
                        .max(10, 'Must be 10 characters or less')
                        .required('Required'),
                    img: Yup.string()
                        .required('Required'),
                    discount: Yup.string()
                        .required('Required'),
                    discountPercent: Yup.string()
                        .required('Required'),
                })}
                onSubmit={(values) => {
                    console.log(values);
                    addToData(values)
                }}
            >
                {formik => (
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="name">Game Name</label>
                        <input
                            id="name"
                            type="text"
                            {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div>{formik.errors.name}</div>
                        ) : null}

                        <label htmlFor="price">Game Price</label>
                        <input
                            id="price"
                            type="text"
                            {...formik.getFieldProps('price')}
                        />
                        {formik.touched.price && formik.errors.price ? (
                            <div>{formik.errors.price}</div>
                        ) : null}

                        <label htmlFor="img">IMG Url</label>
                        <input id="img" type="text" {...formik.getFieldProps('img')} />
                        {formik.touched.img && formik.errors.img ? (
                            <div>{formik.errors.img}</div>
                        ) : null}
                        <label htmlFor="discount">Discount</label>
                        <input id="discount" type="text" {...formik.getFieldProps('discount')} />
                        {formik.touched.discount && formik.errors.discount ? (
                            <div>{formik.errors.discount}</div>
                        ) : null}
                        <label htmlFor="discountPercent">Discount Percent</label>
                        <input id="discountPercent" type="text" {...formik.getFieldProps('discountPercent')} />
                        {formik.touched.discountPercent && formik.errors.discountPercent ? (
                            <div>{formik.errors.discountPercent}</div>
                        ) : null}

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Game Photo</th>
                        <th>Game Name</th>
                        <th>Game Price</th>
                        <th>Buttons</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map(x =>
                        <tr key={x._id}>
                            <td><img src={x.img} alt="" /></td>
                            <td>{x.name}</td>
                            <td>{x.price}</td>
                            <td>
                                <button onClick={() => deleteData(x._id)}>Delete</button>
                                <button><Link style={{ color: "white" }} to={`/adminpanel/update/${x._id}`}>Update</Link></button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default AdminPanel

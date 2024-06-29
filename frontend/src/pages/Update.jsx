import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { getAll, getID, updateDatas } from '../service/service';
import { useParams } from 'react-router-dom';
import "../components/Admin/Update.scss"
function Update() {
    const [datas, setDatas] = useState(null)
    const { id } = useParams()

    async function updateData(val, id) {
        const data = await updateDatas(val, id)
        getAll()
    }

    async function getData() {
        const data = await getID(id)
        setDatas(data)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            {datas && <Formik
                initialValues={{ gameName: datas.name, price: datas.price, img: datas.img ,discount:datas.discount,discountPercent:datas.discountPercent}}
                validationSchema={Yup.object({
                    gameName: Yup.string()
                        .min(5, 'Must be 5 characters or more')
                        .required('Required'),
                    price: Yup.string()
                        .max(10, 'Must be 10 characters or less')
                        .required('Required'),
                    img: Yup.string()
                        .required('Required'),
                })}
                onSubmit={(values) => {
                    setTimeout(() => {
                        updateData(values,id)
                    }, 400);
                }}
            >
                {formik => (
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="gameName">Game Name</label>
                        <input
                            id="gameName"
                            type="text"
                            {...formik.getFieldProps('gameName')}
                        />
                        {formik.touched.gameName && formik.errors.gameName ? (
                            <div>{formik.errors.gameName}</div>
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
            </Formik>}
        </>
    )
}

export default Update

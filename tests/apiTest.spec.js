const { test, expect, request } = require('@playwright/test')

test.describe("API Testing Pertemuan Ke-4", async() => {
    test('Contoh METHOD Get', async({}) => {
        const apiContext = await request.newContext();
        const respond = await apiContext.get('https://reqres.in/api/users?page=2');
        expect(respond.status()).toBe(200);
        const respondBody = await respond.json();
        // console.log(respondBody);
        expect(respondBody.page).toBe(2);
        expect(respondBody.per_page).toBe(6);
    })

    test('Contoh POST', async({}) => {
        const apiContext = await request.newContext();
        const postData = {
            "name": "morpheus",
            "job": "leader"
        }
        const res = await apiContext.post('https://reqres.in/api/users',{
            data: postData
        })
        expect(res.status()).toBe(201);
        const respondBody = await res.json();
        // console.log(respondBody);
        expect(respondBody.name).toBe('morpheus')
        expect(respondBody.job).toBe('leader')
    })

    test('Contoh PUT', async({}) => {
        const apiContext = await request.newContext();
        const putData = {
            "name": "jill valentine",
            "job": "hunter"    
        }
        const res = await apiContext.put('https://reqres.in/api/users/2', {
            data: putData
        })
        expect(res.status()).toBe(200);
        const respondBody = await res.json();
        // console.log(respondBody);
        expect(respondBody.name).toBe('jill valentine');
        expect(respondBody.job).toBe('hunter');
        expect(respondBody.updatedAt).not.toBeNull();
    })

    test('Contoh DELETE', async({}) => {
        const apiContext = await request.newContext();
        const res = await apiContext.delete('https://reqres.in/api/users/2')
        expect(res.status()).toBe(204)
    })
})
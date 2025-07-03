describe('API Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlM2VhZDhjMS01ZjQxLTQ5YTEtOThhZi02ZTc0NTRkMTFkZWIiLCJhZG9wdGVyTmFtZSI6InZpdG9yIiwiaWF0IjoxNzUxNDEzMDMwLCJleHAiOjE3NTE2NzIyMzB9.ZPPQuTcF4Ep9cs6eHmv0_QhdJXvp29hVh-qav13I1Hg`;

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/e3ead8c1-5f41-49a1-98af-6e7454d11deb',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200),
            expect(res.body).is.not.empty,
            expect(res.body.perfil).to.have.property('nome')
        })
    })
})
import { test, expect } from '@playwright/test';

const sections = [
    {section:'Cursos', url:'https://www.freerangetesters.com/cursos', expectedTitle:'Cursos'},
    {section:'Recursos', url:'https://www.freerangetesters.com/recursos', expectedTitle:'Recursos para practicar'},
    {section:'Blog', url:'https://www.freerangetesters.com/blog', expectedTitle:'Un blog de Testing de Software'},
    {section:'Mentorías', url:'https://www.freerangetesters.com/mentoria-1-1-con-pato', expectedTitle:'Mentoría personalizada de avance de carrera para testers de software'},
    {section:'Udemy', url:'https://www.freerangetesters.com/udemy', expectedTitle:'Udemy'},
]


test.describe('Test suite for the site Free Range Testers', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.freerangetesters.com')
    })

    for(const elem of sections){
        test(`It should navigate to "${elem.section}" and validate the site title and URL`, async ({ page }) => {
            await test.step(`Click on "${elem.section}" button`, async ()=>{
                page.getByRole('link', { name: `${elem.section}`, exact: true }).isVisible()
                page.getByRole('link', { name: `${elem.section}`, exact: true }).click()
            })

            await test.step('Validate URL', async()=>{
                await page.waitForURL(elem.url)
            })

            await test.step('Validate title', async () => {
                const locator = page.getByRole('heading', { name: `${elem.expectedTitle}`, exact: true })
                await expect(locator).toHaveText(`${elem.expectedTitle}`)
            })
        })
    }    
})

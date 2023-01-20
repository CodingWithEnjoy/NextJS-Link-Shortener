import React from 'react'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

type Params = {
	params: {
		linkId: string
	}
}

export const getServerSideProps = async ({params}: Params) => {

    try {
        const { linkId } = params;
        const url = await prisma.link.findMany({where: { linkId }});

        if(url.length !== 0) {        
            return {
                redirect: {
                    destination: url[0].url
                },
            }
        } else {
            return {
                redirect: {
                    destination: "/"
                },
            }
        }
    } catch (error) {
        console.log(error);
    }

}

const Link = () => {
  return (
    <div>Link</div>
  )
}

export default Link
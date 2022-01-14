import { generateInFolder } from '../../../../utils/generateInFolder'

beforeAll(async () => {
  await generateInFolder({
    projectDir: __dirname,
    useLocalRuntime: true,
    transpile: true,
    useBuiltRuntime: false,
    relativeOutputDir: './prismaClient',
  })
})

test('connect to client generated 1 directory level', async () => {
  // @ts-ignore
  const { PrismaClient } = await import('./prismaClient')
  const prisma = new PrismaClient()

  await prisma.$connect()
  await prisma.$disconnect()
})

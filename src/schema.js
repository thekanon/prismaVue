const { nexusPrisma } = require('nexus-plugin-prisma')
const { idArg, makeSchema, objectType, stringArg } = require('@nexus/schema')

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.username()
    t.model.email()
    t.model.votes({
      pagination: false,
    })
  },
})

const UserVote = objectType({
    name: 'UserVote',
    definition(t) {
      t.model.user()
      t.model.userId()
      t.model.vote()
      t.model.voteId()
      t.model.voteSelect()
    },
  })

const Vote = objectType({
  name: 'Vote',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.description()
    t.model.users({
        pagination: false,
    })
    t.model.upperVote({
        pagination: false,
    })
    t.model.lowerVote({
        pagination: false,
    })
    t.model.val1()
    t.model.val2()
    t.model.val3()
    t.model.val4()
    t.model.val5()
    t.model.val6()
    t.model.val7()
    t.model.val8()
    t.model.val9()
    t.model.val10()
    t.model.val11()
    t.model.val12()
    t.model.val13()
    t.model.val14()
    t.model.val15()
    t.model.val15()
    t.model.val16()
    t.model.val17()
    t.model.val18()
    t.model.val19()
    t.model.val20()
  },
})

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.User()

    t.list.field('allUsers', {
      type: 'User',
      resolve: (_, args, ctx) => {
        return ctx.prisma.user.findMany({
        })
      },
    })

    t.list.field('filterUsers', {
      type: 'user',
      args: {
        searchString: stringArg( ),
      },
      resolve: (_, { searchString }, ctx) => {
        return ctx.prisma.user.findMany({
          where: {
            OR: [
              { username: { contains: searchString } },
              { email: { contains: searchString } },
            ],
          },
        })
      },
    })
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
  },
})

const schema = makeSchema({
  types: [Query, Vote, User, UserVote],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})

module.exports = {
  schema,
}

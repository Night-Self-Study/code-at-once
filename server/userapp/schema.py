import graphene
from graphene_django import DjangoObjectType
from userapp.models import UserModel

class CreateUser(graphene.Mutation):
    id = graphene.Int()
    userid = graphene.String()
    name = graphene.String()
    pw = graphene.String()
    dist_num = graphene.String()
    phone = graphene.String()

    class Arguments:
        userid = graphene.String()
        name = graphene.String()
        pw = graphene.String()
        dist_num = graphene.String()
        phone = graphene.String()

    def mutate(self, info, userid, name, pw, dist_num, phone):
        user = UserModel(userid=userid, name=name, pw=pw, dist_num=dist_num, phone=phone)
        user.save()

        return CreateUser(id=user.id, userid=user.userid, name=user.name, pw=user.pw, dist_num=user.dist_num, phone=user.phone)
    
class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()

class UserType(DjangoObjectType):
    class Meta:
        model = UserModel

class Query(graphene.ObjectType):
    users = graphene.List(UserType)

    def resolve_users(self, info):
        return UserModel.objects.all()

schema = graphene.Schema(query=Query, mutation=Mutation)

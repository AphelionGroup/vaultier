from django.core.management.base import BaseCommand
from vaultier.models.acl import Acl
from vaultier.models.member_fields import MemberStatusField
from vaultier.models.role import Role
from vaultier.perms.materializer import CreateRoleMaterializer

class Command(BaseCommand):

    def handle(self, *command_args, **command_options):
        Acl.objects.all().delete();
        for role in Role.objects.all():
            if not role.member.status == MemberStatusField.STATUS_INVITED:
                m = CreateRoleMaterializer(role)
                m.materialize(role.get_object())



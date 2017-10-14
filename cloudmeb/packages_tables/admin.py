from django.contrib import admin
from cloudmeb.packages_tables.models import Packages_table
from django.utils.translation import ugettext_lazy as _

class Packages_tableAdmin(admin.ModelAdmin):
    fileds = ('packages_table_gateway_link', 'packages_table_plan', 'packages_table_description_en', 'packages_table_description_fr', 'packages_table_retail', 'packages_table_cloudmeb', 'packages_table_savings',)
    list_display = ('packages_table_gateway_link', 'packages_table_plan', 'packages_table_description', 'packages_table_retail', 'packages_table_cloudmeb', 'packages_table_savings',)

admin.site.register(Packages_table, Packages_tableAdmin)


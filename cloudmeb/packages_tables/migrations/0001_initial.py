# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Packages_table',
            fields=[
                ('packages_table_id', models.AutoField(serialize=False, primary_key=True)),
                ('packages_table_gateway_link', models.TextField(verbose_name='gateway link', max_length=1000, unique=True)),
                ('packages_table_plan', models.CharField(verbose_name='package plan items', max_length=200, unique=True)),
                ('packages_table_description_en', models.TextField(verbose_name='english package description', max_length=1000, unique=True)),
                ('packages_table_description_fr', models.TextField(verbose_name='french package description', max_length=1000, unique=True)),
                ('packages_table_retail', models.CharField(verbose_name='package retail', max_length=200, unique=True)),
                ('packages_table_cloudmeb', models.CharField(verbose_name='package cloudmeb', max_length=200, unique=True)),
                ('packages_table_savings', models.CharField(verbose_name='package savings', max_length=200, unique=True)),
            ],
            options={
                'verbose_name': 'packages_table',
                'verbose_name_plural': 'packages_tables',
            },
        ),
    ]

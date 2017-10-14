# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Receipt_bank_txt',
            fields=[
                ('receipt_bank_txt_id', models.AutoField(primary_key=True, serialize=False)),
                ('receipt_bank_txt_name', models.CharField(verbose_name='page name', max_length=100, choices=[('WHY_CLOUDMEB', 'Why Cloudmeb'), ('PLUG_IN_YOUR_BUSINESS', 'Plug-in your business'), ('SOLUTIONS', 'Solutions'), ('BECOME_A_PARTNER', 'Become a partner'), ('CONTACT_US', 'Contact us'), ('FREQUENTLY_ASKED_QUESTIONS', 'Frequently asked questions'), ('RECEIPT_BANK_LANDING', 'Receipt Bank Landing Page')])),
                ('receipt_bank_txt_header_title_en', models.CharField(unique=True, max_length=300, verbose_name='english banner header title')),
                ('receipt_bank_txt_header_title_fr', models.CharField(unique=True, max_length=300, verbose_name='french banner header title')),
                ('receipt_bank_txt_header_subtitle_en', models.CharField(unique=True, max_length=300, verbose_name='english banner header sub title')),
                ('receipt_bank_txt_header_subtitle_fr', models.CharField(unique=True, max_length=300, verbose_name='french banner header sub title')),
                ('receipt_bank_txt_why_title_en', models.CharField(unique=True, max_length=300, verbose_name='english why title')),
                ('receipt_bank_txt_why_title_fr', models.CharField(unique=True, max_length=300, verbose_name='french why title')),
                ('receipt_bank_txt_freeintroduce_title_en', models.CharField(unique=True, max_length=300, verbose_name='english freeintroduce title')),
                ('receipt_bank_txt_freeintroduce_title_fr', models.CharField(unique=True, max_length=300, verbose_name='french freeintroduce title')),
                ('receipt_bank_txt_freeintroduce_text_en', models.TextField(verbose_name='english freeintroduce text')),
                ('receipt_bank_txt_freeintroduce_text_fr', models.TextField(verbose_name='french freeintroduce text')),
                ('receipt_bank_txt_supercharge_title_en', models.CharField(unique=True, max_length=300, verbose_name='english supercharge title')),
                ('receipt_bank_txt_supercharge_title_fr', models.CharField(unique=True, max_length=300, verbose_name='french supercharge title')),
                ('receipt_bank_txt_supercharge_subtitle1_en', models.CharField(unique=True, max_length=300, verbose_name='english supercharge subtitle1')),
                ('receipt_bank_txt_supercharge_subtitle1_fr', models.CharField(unique=True, max_length=300, verbose_name='french supercharge subtitle1')),
                ('receipt_bank_txt_supercharge_subtext1_en', models.TextField(verbose_name='english supercharge subtext1')),
                ('receipt_bank_txt_supercharge_subtext1_fr', models.TextField(verbose_name='french supercharge subtext1')),
                ('receipt_bank_txt_supercharge_subtitle2_en', models.CharField(unique=True, max_length=300, verbose_name='english supercharge subtitle2')),
                ('receipt_bank_txt_supercharge_subtitle2_fr', models.CharField(unique=True, max_length=300, verbose_name='french supercharge subtitle2')),
                ('receipt_bank_txt_supercharge_subtext2_en', models.TextField(verbose_name='english supercharge subtext2')),
                ('receipt_bank_txt_supercharge_subtext2_fr', models.TextField(verbose_name='french supercharge subtext2')),
                ('receipt_bank_txt_supercharge_subtitle3_en', models.CharField(unique=True, max_length=300, verbose_name='english supercharge subtitle3')),
                ('receipt_bank_txt_supercharge_subtitle3_fr', models.CharField(unique=True, max_length=300, verbose_name='french supercharge subtitle3')),
                ('receipt_bank_txt_supercharge_subtext3_en', models.TextField(verbose_name='english supercharge subtext3')),
                ('receipt_bank_txt_supercharge_subtext3_fr', models.TextField(verbose_name='french supercharge subtext3')),
                ('receipt_bank_txt_how_work_title_en', models.CharField(unique=True, max_length=300, verbose_name='english how work title')),
                ('receipt_bank_txt_how_work_title_fr', models.CharField(unique=True, max_length=300, verbose_name='french how work title')),
                ('receipt_bank_txt_start_now_title_en', models.CharField(unique=True, max_length=300, verbose_name='english start now title')),
                ('receipt_bank_txt_start_now_title_fr', models.CharField(unique=True, max_length=300, verbose_name='french start now title')),
                ('receipt_bank_txt_application_free_header_en', models.CharField(unique=True, max_length=300, verbose_name='english application free header')),
                ('receipt_bank_txt_application_free_header_fr', models.CharField(unique=True, max_length=300, verbose_name='french application free header')),
                ('receipt_bank_txt_application_free_subheader_en', models.CharField(unique=True, max_length=300, verbose_name='english application free subheader')),
                ('receipt_bank_txt_application_free_subheader_fr', models.CharField(unique=True, max_length=300, verbose_name='french application free subheader')),
                ('receipt_bank_txt_application_header_en', models.CharField(unique=True, max_length=300, verbose_name='english application header')),
                ('receipt_bank_txt_application_header_fr', models.CharField(unique=True, max_length=300, verbose_name='french application header')),
                ('receipt_bank_txt_application_subheader_en', models.CharField(unique=True, max_length=300, verbose_name='english application subheader')),
                ('receipt_bank_txt_application_subheader_fr', models.CharField(unique=True, max_length=300, verbose_name='french application subheader')),
            ],
            options={
                'verbose_name': 'receipt_bank_txt',
                'verbose_name_plural': 'receipt_bank_txts',
            },
        ),
    ]

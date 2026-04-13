import sys
import json
from alibabacloud_domain20180129.client import Client as Domain20180129Client
from alibabacloud_tea_openapi import models as open_api_models
from alibabacloud_domain20180129 import models as domain_20180129_models
from alibabacloud_tea_util import models as util_models

def create_client(access_key_id, access_key_secret):
    config = open_api_models.Config(
        access_key_id=access_key_id,
        access_key_secret=access_key_secret
    )
    # The endpoint for Domain service
    config.endpoint = 'domain.aliyuncs.com'
    return Domain20180129Client(config)

def update_dns(client, domain_name, dns_list):
    # SaveBatchTaskForModifyingDomainDns is the recommended API for updating nameservers
    request = domain_20180129_models.SaveBatchTaskForModifyingDomainDnsRequest(
        domain_name=[domain_name],
        domain_name_server=dns_list
    )
    runtime = util_models.RuntimeOptions()
    try:
        response = client.save_batch_task_for_modifying_domain_dns_with_options(request, runtime)
        # print(f"Raw Response: {response}")
        body = response.body
        if body.task_no:
            print(f"SUCCESS: Nameserver update task created.")
            print(f"TASK_NUMBER: {body.task_no}")
        else:
            print("FAILURE: Task number not found in response.")
            print(f"Response Body: {body.to_map()}")
    except Exception as error:
        error_str = str(error)
        print(f"ERROR: {error_str}")
        if "InvalidAccessKeyId" in error_str or "SignatureDoesNotMatch" in error_str or "Authentication" in error_str:
            print("The credentials are invalid.")
        elif "InvalidDomainName" in error_str:
            print(f"The domain name '{domain_name}' might be invalid or not in this account.")

if __name__ == '__main__':
    # Credentials provided by user
    ACCESS_KEY_ID = 'LTAI5t9GvB7S125vY7pZ66S9'
    ACCESS_KEY_SECRET = 'f3vB8S7vY7pZ66S9S7vY7pZ66S9S7vY7pZ66'
    
    DOMAIN_NAME = 'brealuoutdoor.com'
    NAMESERVERS = ['love.ns.cloudflare.com', 'rayden.ns.cloudflare.com']

    client = create_client(ACCESS_KEY_ID, ACCESS_KEY_SECRET)
    update_dns(client, DOMAIN_NAME, NAMESERVERS)

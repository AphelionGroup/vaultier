from json import dumps
from django.core.urlresolvers import reverse
from vaultier.test.tools import VaultierAPIClient


def create_secret_blob_api_call(token, **kwargs):
    url = reverse('secret_blob-list')
    client = VaultierAPIClient()
    client.token(token)
    response = client.post(url, kwargs)
    return response


def delete_secret_blob_api_call(token, id):
    url = reverse('secret_blob-detail', args=(id,))
    client = VaultierAPIClient()
    client.token(token)
    response = client.delete(url)
    return response


def retrieve_secret_blob_api_call(token, id):
    url = reverse('secret_blob-detail', args=(id,))
    client = VaultierAPIClient()
    client.token(token)
    response = client.get(url)
    return response


def update_secret_blob_api_call(token, id, **kwargs):
    url = reverse('secret_blob-detail', args=(id,))
    client = VaultierAPIClient()
    client.token(token)
    response = client.patch(url, dumps(kwargs), content_type="application/json")
    return response


def list_secrets_blob_api_call(token, **kwargs):
    url = reverse('secret_blob-list')
    client = VaultierAPIClient()
    client.token(token)
    response = client.get(url, **kwargs)
    return response
---
title: "CLI Environment Variables"
---

<div class="block-callout block-show-callout type-info" markdown="1">
This page is about CLI-specific environment variables. For information about Docker- and app-related environments, see the [Environment documentation](/docs/environment).
</div>

Convox pays attention to the following environment variables.

## `AWS_REGION`, `AWS_DEFAULT_REGION`

Amazon region in which new Racks will be installed.

## `AWS_ENDPOINT`

Custom [Amazon endpoint](http://docs.aws.amazon.com/general/latest/gr/rande.html).

## `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_SESSION_TOKEN`

AWS credentials.

## `CONVOX_CONFIG`

Location of Convox config directory.

## `CONVOX_DEBUG`

Makes `convox` produce more verbose output.

## `CONVOX_EMAIL`

Email address to receive project updates.

## `CONVOX_RACK`

Defines which Rack `convox` commands should be applied to. Overrides `./.convox/rack` and `~/.convox/rack`. Can be overridden by `--rack` flag.

## `CONVOX_HOST`

Convox Rack or Console endpoint. If not present, `console.convox.com` is assumed. Overrides [`~/.convox/host`](/docs/cli-config-files/#convoxhost).

## `CONVOX_PASSWORD`

Your Convox account password*; used when running [`convox login`](/docs/login-and-authentication/).

_* or Rack API key, if you're logging directly into a Rack._

## `CONVOX_WAIT`

Setting `CONVOX_WAIT` to a truthy value (`true`, `True`, `1`, etc) will cause relevant commands (`convox deploy`, `convox apps create`, etc) to behave as if the `--wait` flag had been provided; that is, they will wait for the operation to complete before returning.

## `PASSWORD`

Private registry password for the [`convox registries`](/docs/private-registries) command.

## `RACK`

Active Rack name. Takes precedence over the `.convox/rack` repository setting, but is overridden by the `--rack` flag. For details, see [Switching between Racks](/docs/cli#switching-between-racks).

## `RACK_PRIVATE`

Make Racks private by default when running `convox install` (overridden by `--private`).

## `STACK_NAME`

Custom Rack name. Used when [installing a new Rack](/docs/installing-a-rack).

## `SUBNETS_PRIVATE`, `SUBNETS`

`List<AWS::EC2::Subnet::Id>`

If `SUBNETS_PRIVATE` is empty, `SUBNETS` will be used.

## `TEMPLATE_FILE`

Custom CloudFormation stack template.

## `VERSION`

Custom Rack version. Used when [installing a new Rack](/docs/installing-a-rack). Defaults to `latest`.

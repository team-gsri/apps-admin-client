[CmdletBinding()]
param (
  [Parameter()]
  [ValidateScript({ $_ | Test-Path -PathType Container }, ErrorMessage = 'Path must be a valid directory')]
  [string]
  $Path = (Join-Path $PSScriptRoot ../dist/gsri-admin | Convert-Path),

  [Parameter()]
  [string]
  $Image = 'ghcr.io/team-gsri/apps-admin-client',

  [Parameter()]
  [semver]
  $Tag,
  
  [Parameter()]
  [ValidateScript({ $_ | Test-Path -PathType Leaf }, ErrorMessage = 'Path must be a valid file')]
  [string]
  $Dockerfile = (Join-Path $PSScriptRoot Dockerfile | Convert-Path)
)

if ($null -eq $Tag) {
  Import-Module -Force StepSemVer
  $Tag = [semver]$(git describe --tags 2>&1) | Step-SemVer -BumpType patch -PreRelease 'SNAPSHOT'
  Write-Verbose "Docker tag: $Tag"
}

docker build --file "$Dockerfile" --tag "${Image}:${Tag}" "${Path}"